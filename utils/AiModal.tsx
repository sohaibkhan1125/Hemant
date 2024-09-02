import * as https from 'https';

const options = {
    method: 'POST',
    hostname: 'open-ai21.p.rapidapi.com',
    port: null,
    path: '/chatgpt',
    headers: {
        'x-rapidapi-key': 'b9b276d0c1msh822603b0c726babp1e9c4djsn4fbc5f965e78',
        'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

interface ChatResponse {
    result: string;
    status: boolean;
    server_code: number;
}

export const chatSession = (userMessage: string): Promise<ChatResponse> => {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            const chunks: Uint8Array[] = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const body = Buffer.concat(chunks);
                try {
                    const response = JSON.parse(body.toString());

                    // Check for different possible response structures
                    if (response && response.choices && response.choices.length > 0) {
                        resolve({
                            result: response.choices[0].message.content,
                            status: true,
                            server_code: res.statusCode || 500
                        });
                    } else if (response && response.result) {
                        resolve({
                            result: response.result,
                            status: true,
                            server_code: res.statusCode || 500
                        });
                    } else if (response && response.data) {
                        resolve({
                            result: response.data.message || "No message found",
                            status: true,
                            server_code: res.statusCode || 500
                        });
                    } else {
                        reject(new Error('Invalid response structure'));
                    }
                } catch (error) {
                    // Cast error to the Error type
                    reject(new Error('Failed to parse response: ' + (error as Error).message));
                }
            });
        });

        req.on('error', (error) => {
            // Cast error to the Error type
            reject(new Error('Request failed: ' + (error as Error).message));
        });

        // Writing the request with the user's message
        req.write(JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: userMessage
                }
            ],
            web_access: false
        }));

        req.end();
    });
};
