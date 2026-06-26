import 'react-native-url-polyfill/auto';
import { Client, Account, Databases, Storage, Avatars } from 'react-native-appwrite';

const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  projectName: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME,
};

if (!appwriteConfig.endpoint || !appwriteConfig.projectId) {
  console.warn('Appwrite environment variables are not fully configured.');
}

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint || '')
  .setProject(appwriteConfig.projectId || '')
  .setPlatform('com.locbh3010.taskrn');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

export { client, appwriteConfig };
