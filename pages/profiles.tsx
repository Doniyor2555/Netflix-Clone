import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Profiles = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl md:text-6xl text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center mt-10 gap-8">
          <div onClick={() => router.push('/')}>
            <div className="group w-44 flex-row mx-auto">
              <div
                className="
                w-44
                h-44
                rounded-md
                flex
                items-center
                justify-center
                border-2
                border-transparent
                group-hover:cursor-pointer
                group-hover:border-white
                overflow-hidden
              "
              >
                <img
                  src={user?.image ? user?.image : "/images/default-green.png"}
                  alt="Profile"
                />
              </div>

              <div className="text-2xl mt-4 text-gray-400 group-hover:text-white text-center">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
