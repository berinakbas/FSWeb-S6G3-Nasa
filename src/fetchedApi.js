const api_key = "LF39gPCsC8eJ3ABCIALLUkklR9ckp2g2sOfoHeDa"

let ApiObj = {

    fetchData: async function (count) {
        var requestOptions = {
            method : "GET",
            redirect : "follow",
        };

        let result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${count}`,

        requestOptions
        ).then((response) => response.text());

        return JSON.parse(result);
    },
};

export default ApiObj;