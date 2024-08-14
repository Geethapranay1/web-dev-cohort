const solver = require("metabypass");

const solveCaptcha = async()=>{
    const user = {
        grant_type: "password", // Dont change it
        client_id: "1690",
        client_secret: "1eFbeVY56NXWgkmloioE1gOz03lWpRMPRbh6aJF5",
        username: "geethapranay.official@gmail.com",
        password: "16839744=4!23#@5421042018",
  };
  const token = await solver.getToken(user);
  // use one of below function for base64 getBase64LocalCaptcha for local image and getBase64Encoded for external image
  const image = await solver.getBase64Encoded('https://jeemainsession2.ntaonline.in/frontend/web/registration/captcha?v=666bf78b3c1225.20025031') 
  data ={
  image: image,
  numeric:0,
  min_len:0,
  max_len:0
  }
  const result = await solver.captchaSolver(token, data);
  console.log(result);
  }
solveCaptcha()

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNjkwIiwianRpIjoiNjQ0MGM1ODdkMWE5NjQ0YmU2ZTk5MjRiNzU3ZjQwN2UzNmEwOTM4ODI5NzBjMzAxZmVmNWU1YTlmZjhhYjdhNjU4Y2I1NDhhZWE2YTMzNmIiLCJpYXQiOjE3MTgzNTEwODkuMzMxNDA3LCJuYmYiOjE3MTgzNTEwODkuMzMxNDEsImV4cCI6MTc0OTg4NzA4OS4zMjA4NzcsInN1YiI6IjI5NTAiLCJzY29wZXMiOltdfQ.mT7p4b5doRY5U3m8W4ANvwuuMw7BApz4YMQk9klJA20CBJyvOuxPJxAU3yzIZH8cJe5dk2xNyQfeX_EegEc64QpvhYv6NirpN2QGulJQJt-u-VHHZH764caczEn79TperC2-k2EQVOAiQlWur3qRl6j5chjDNyyxl3TUe9G4pyCoeaDKvi35dwDBaHIGn97l2gGteCK03KU1VejenolC-6BKS2oJjjMU8PJmJ_ynI8PCCHB5AI5e1qUlKTf16Qe2jmZAqfc8DF8NggqR1vrbvxZodm1KC4jsZzTS6dIr-bNxHKFjZgBcZWlT4LeIWA6JxxGh2DmA9YQeB_81AnqczuQcVgiYkqexYuXPXC5lFh8aZjw7FOWpB15kLMhWR4FTtcSPD24D0bsAPdcvVl7e1LU4kbelSYwEyZnEyB5U2B2HEhjaKEbGDAmL14_jk51pfSv32ny-za_M5V1FX-iwvJd3qwElnB7qJ3zKbdvERskpXD-Y4HHNHvtopb74aZ095yix2d0lwWwAUdvfrPSXJqhkZmSkgPT2oGziImG3-ymmZwBvVK709KKCZ2d7eBbymR9r4nt_2EHumkdf6cz76pdqEb2yyxsHuoEtieC6TxUxmugzwckHuC5PGiYZpDQAnHS2zgWFhbc4amRqLNVdp1_T3O5pimDHZdmQeTCgVrU