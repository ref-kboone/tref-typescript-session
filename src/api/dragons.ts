import axios from "axios";

export interface GetDragonResponse {
  id: string;
  name: string;
  type: "capsule" | "something else";
  active: boolean;
  crew_capacity: 2 | 4;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight: string;
  heat_shield: HeatShield;
  thrusters: Array<Thruster>;
}

export interface HeatShield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

export interface Thruster {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  thrust: {
    kN: number;
    lbf: number;
  };
}

export interface GetDragonRequest {
  id: string;
}

// https://docs.spacexdata.com/#a9129d6a-1bab-42a1-af1b-2b1064016f9d
export const getDragon = async (
  request: GetDragonRequest
): Promise<GetDragonResponse> => {
  const { data } = await axios.request({
    url: `https://api.spacexdata.com/v3/dragons/${request.id}`,
    method: "GET",
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
