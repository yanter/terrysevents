import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Terrys Events",
	// Your website's title and description (meta fields)
	title: "Terrys Events | The beautiful event blog",
	description:
		"The beautiful travel blog theme",
	// Your information!
	author: {
		name: "Terry",
		email: "contact@terrys.events.com",
		twitter: "Terrys_Events",
		slug: "main-author", // this must match an author slug in the authors content collection at src/data/authors/{slug}
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes Logo",
	},
};

export default siteData;
