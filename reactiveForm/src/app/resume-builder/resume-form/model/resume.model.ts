export interface resumeData{
    
    id: number,
    name: string,
    profile: string,
    skill: Tech[],
    experience: Experience[],
    education: Edu[]
}
export interface Tech{
    skill: string,
}

export interface Experience{
    companyName: string,
    position: string,
    description: string,
    year: number
}

export interface Edu{
    university: string,
    cgpa: number
}