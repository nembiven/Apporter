export interface UserModel{
	id : string;
	name : string;
	phone : number;
	mail : string;
	description?: string;
	filters : string[];
	publish : string[];
}