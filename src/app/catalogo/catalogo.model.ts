export interface Equipo{
  nombre: string;
  logo: string;
}

export interface Partido{
  id: string;
  estado: string;
  equipo1: Equipo;
  equipo2: Equipo;
}
