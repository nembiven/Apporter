export interface Publish {
    id:string,
    title:string,
    description:string,
    lat:number,
    long:number,
    userid:string,
    username:string,
    label: string,
    
}

export interface LabelContextType{
    LabelsContext : [],
    setLabelsContext:(value: []) => void;
}

export interface PublishContextType {
    PublicationsContext : Array<Publish>
    setPublicationsContext:(value:Array<Publish>) =>void;
}