import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Pagina sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2">
        <Link to="/profile" className="hover:text-blue-500 underline text-2xl">
          Perfil
        </Link>
        <Link className="hover:text-blue-500 underline text-2xl" to="/login">
          Iniciar sesion
        </Link>
      </div>
    </div>
  );
};
