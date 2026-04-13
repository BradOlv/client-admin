export const LoginForm = ({ onForgot }) => {
  return (
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          Email o Usuario
        </label>
        <input
          type="text"
          placeholder="correo@ejemplo.com o usuario"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#002e6d] hover:bg-[#001f4d] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
      >
        Iniciar Sesión
      </button>

      <div className="text-center space-y-2">
        <button
          type="button"
          onClick={onForgot}
          className="text-sm text-blue-600 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </button>
        
        <p className="text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <button type="button" className="text-blue-600 font-medium hover:underline">
            Regístrate
          </button>
        </p>
      </div>
    </form>
  );
};