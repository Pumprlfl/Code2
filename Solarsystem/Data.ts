namespace SolarSystem {
    export interface Data {
        name: string;
        color: string;
        size: number;
        velocity: number;
        orbitRadius: number;
        children: Data[];
    }

    export const data: Data = {
        name: "Sun", color: "yellow", size: 30, velocity: 0, orbitRadius: 0, children: [
            { name: "Mercury", color: "gainsboro", size: 3, velocity: 0.26, orbitRadius: 55, children: [] },
            { name: "Venus", color: "moccasin", size: 8, velocity: 0.23, orbitRadius: 80, children: [] },
            {
                name: "Earth", color: "dodgerblue", size: 8, velocity: 0.15, orbitRadius: 112, children: [
                    { name: "Günni", color: "grey", size: 2, velocity: 0.3, orbitRadius: 12, children: [] }
                ]
            },
            {
                name: "Mars", color: "saddlebrown", size: 5, velocity: 0.25, orbitRadius: 145, children: [
                    { name: "Phobos", color: "grey", size: 2, velocity: 0.2, orbitRadius: 8, children: [] },
                    { name: "Deimos", color: "grey", size: 2, velocity: 0.4, orbitRadius: 11, children: [] }
                ]
            },
            {
                name: "Jupiter", color: "sienna", size: 20, velocity: 0.25, orbitRadius: 195, children: [
                    { name: "Io", color: "grey", size: 2, velocity: 0.4, orbitRadius: 25, children: [] },
                    { name: "Europa", color: "grey", size: 2, velocity: 0.15, orbitRadius: 26, children: [] },
                    { name: "Ganymed", color: "grey", size: 2, velocity: 0.3, orbitRadius: 28, children: [] },
                    { name: "Kallisto", color: "grey", size: 2, velocity: 0.1, orbitRadius: 32, children: [] }
                ]
            },
            {
                name: "Saturn", color: "wheat", size: 18, velocity: 0.14, orbitRadius: 262, children: [
                    { name: "Mimas", color: "grey", size: 2, velocity: 0.1, orbitRadius: 23, children: [] },
                    { name: "Enceladus", color: "grey", size: 2, velocity: 0.5, orbitRadius: 23, children: [] },
                    { name: "Tethys", color: "grey", size: 2, velocity: 0.3, orbitRadius: 24, children: [] },
                    { name: "Dione", color: "grey", size: 2, velocity: 0.2, orbitRadius: 24, children: [] },
                    { name: "Rhea", color: "grey", size: 2, velocity: 0.4, orbitRadius: 25, children: [] },
                    { name: "Titan", color: "grey", size: 2, velocity: 0.15, orbitRadius: 26, children: [] },
                    { name: "Hyperion", color: "grey", size: 2, velocity: 0.25, orbitRadius: 27, children: [] },
                    { name: "Iapetus", color: "grey", size: 2, velocity: 0.35, orbitRadius: 28, children: [] }
                ]
            },
            {
                name: "Uranus", color: "paleturquoise", size: 12, velocity: 0.17, orbitRadius: 320, children: [
                    { name: "Miranda", color: "grey", size: 2, velocity: 0.4, orbitRadius: 16, children: [] },
                    { name: "Ariel", color: "grey", size: 2, velocity: 0.5, orbitRadius: 16, children: [] },
                    { name: "Umbriel", color: "grey", size: 2, velocity: 0.3, orbitRadius: 17, children: [] },
                    { name: "Titania", color: "grey", size: 2, velocity: 0.2, orbitRadius: 18, children: [] },
                    { name: "Oberon", color: "grey", size: 2, velocity: 0.35, orbitRadius: 20, children: [] }
                ]
            },
            {
                name: "Neptune", color: "steelblue", size: 12, velocity: 0.3, orbitRadius: 370, children: [
                    { name: "Triton", color: "grey", size: 2, velocity: 0.3, orbitRadius: 17, children: [] }
                ]
            }
        ]
    }
}