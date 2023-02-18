
# [WhereToGo](https://www.wheretogo.pages.dev/)

This project Recommend places for you using AI.

[![WhereToGo](https://user-images.githubusercontent.com/42272376/219830703-0bb2a3db-62f1-4f8d-b32f-ed3b40528311.png)](https://www.wheretogo.pages.dev/)

## How it works

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.

Video and blog post coming soon on how to build apps with OpenAI and Vercel Edge functions!

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

