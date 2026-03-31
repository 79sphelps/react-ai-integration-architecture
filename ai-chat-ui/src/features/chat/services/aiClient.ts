// import { generateResponse } from './transformersClient';

// export const aiClient = {
//   async sendMessage(prompt: string) {
//     try {
//       return await generateResponse(prompt);
//     } catch (error) {
//       console.error(error);
//       throw new Error('AI response failed');
//     }
//   },
// };

import { generateResponse } from './apiClient'

export const aiClient = {
  async sendMessage(message: string) {
    return generateResponse(message)
  },
}