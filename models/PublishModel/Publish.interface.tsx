import { LabelCollectionModel } from "../LabelCollection/LabelCollection.interface";
export interface PublishModel{
	user_id: string;
	title : string;
	description : string;
	create_date : string;
	end_date : string;
	isActive : boolean;
	labels : LabelCollectionModel
}