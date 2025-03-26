import { Idl } from "@coral-xyz/anchor";

export type Turbin3Prereq = Idl & {
    version: string;
    name: string;
    address: string;
    metadata: {
        name: string;
        version: string;
        spec: string;
        description?: string;
        repository?: string;
    };
    instructions: {
        name: string;
        docs?: string[];
        discriminator: number[];
        accounts: {
            name: string;
            docs?: string[];
            writable?: boolean;
            signer?: boolean;
            optional?: boolean;
        }[];
        args: {
            name: string;
            docs?: string[];
            type: "bytes" | "string" | "pubkey" | "u8" | "u16" | "u32" | "u64"; // Add more types as needed
        }[];
    }[];
};

export const IDL: Turbin3Prereq = {
    version: "0.1.0",
    name: "Turbin3_prereq",
    address: "Trb3aEx85DW1cEEvoqEaBkMn1tfmNEEEPaKzLSu4YAv",
    metadata: {
        name: "Turbin3_prereq",
        version: "0.1.0",
        spec: "0.0.1",
        description: "Prerequisite program for Turbin3",
    },
    instructions: [
        {
            name: "complete",
            docs: ["Complete the prerequisite step"],
            discriminator: [0], // Important: add a discriminator
            accounts: [
                {
                    name: "signer",
                    writable: true,
                    signer: true,
                    docs: ["The account signing the transaction"]
                },
                {
                    name: "prereq",
                    writable: true,
                    signer: false,
                    docs: ["Prerequisite account"]
                },
                {
                    name: "systemAccount",
                    writable: false,
                    signer: false,
                    docs: ["System account"]
                }
            ],
            args: [
                {
                    name: "github",
                    type: "bytes",
                    docs: ["GitHub account or repository"]
                }
            ]
        }
    ],
    accounts: [], // Add any program accounts if applicable
    errors: [], // Add any custom error codes if applicable
    types: [], // Add any custom type definitions if needed
    constants: [], // Add any constants if needed
};