export interface ICategory {
	title: string;
	children: ICategoryItem[];
}

export interface ICategoryItem {
	title: string;
	url: string;
}

export const categories: ICategory[] = [
	{
		title: "General",
		children: [
			{
				title: "Home",
				url: "/",
			},
			{
				title: "Calendar",
				url: "/calendar",
			},
			{
				title: "Inbox",
				url: "/inbox",
			},
			{
				title: "Counter",
				url: "/counter",
			},
		],
	},
];
