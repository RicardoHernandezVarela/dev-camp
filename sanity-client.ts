import { createClient } from "@sanity/client";

const SANITY_PROJECT = process.env.SANITY_PROJECT;
const SANITY_DATASET = process.env.SANITY_DATASET;
const SANITY_TOKEN = process.env.SANITY_TOKEN

const client = createClient({
	projectId: SANITY_PROJECT, // you can find this in sanity.json
	dataset: SANITY_DATASET, // or the name you chose in step 1
	useCdn: false, // `false` if you want to ensure fresh data
	token: SANITY_TOKEN
});

export default client;

