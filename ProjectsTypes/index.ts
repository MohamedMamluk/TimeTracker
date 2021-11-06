export interface ActivityTypes {
  createdAt: string;
  createdBy: string;
  name: string;
  time: string;
  updatedAt: string;
  color: string;
  _id: string;
}
export interface CardProps {
  name: string;
  loginState: boolean;
}
export interface ActivitiesProps {
  data: ActivityTypes[];
  token: string;
}
export interface NewActivityProps {
  token: string;
}
export interface DetailsPropsdata {
  details: ActivityTypes;
}
