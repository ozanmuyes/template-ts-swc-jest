import message from "./message";

if (process.env.APP_START_BANNER) {
  console.log(process.env.APP_START_BANNER);
}

console.log(message);
