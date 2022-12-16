import { Publish } from "../PublishModel/Publish.interface";
export interface PublishContextType {
    PublicationsContext : Array<Publish>
    setPublicationsContext:(value:Array<Publish>) =>void;
}