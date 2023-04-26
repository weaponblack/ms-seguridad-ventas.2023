export namespace ConfiguracionSeguridad {
  export const claveJWT = process.env.SECRET_PASSWORD_JWT;
  export const menuUsuarioId = process.env.MENU_USUARIO_ID;
  export const listarAccion = "listar";
  export const guardarAccion = "guardar";
  export const editarzAccion = "editar";
  export const eliminarAccion = "eliminar";
  export const descargarAccion = "descargar";
  export const mongodbConnectionString = process.env.CONNECTION_STRING_MONGODB;

}
