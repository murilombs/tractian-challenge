export interface ICompany {
    id: string,
    name: string
}

export interface ILocation {
    id: string,
    name: string,
    parentId: string | null,
}

export interface IAsset {
    id: string,
    name: string,
    parentId: string | null,
    sensorId: string,
    sensorType: string | null,
    status: string | null,
    gatewayId: string,
    locationId: string | null,
}