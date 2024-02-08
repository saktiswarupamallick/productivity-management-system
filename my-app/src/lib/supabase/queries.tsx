'use server'
import { validate } from 'uuid';
import { files, folders, users, workspaces } from '../../../migrations/schema';
import db from './db';
import { File, Folder, Subscription, User, workspace } from './supabase.types';
import { and, eq, ilike, notExists } from 'drizzle-orm';


export const createWorkspace = async (workspace: workspace) => {
  try {
    const response = await db.insert(workspaces).values(workspace);
    return { data: null, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: 'Error' };
  }
};

export const getUserSubscriptionStatus = async (userId: string) => {
    try {
      const data = await db.query.subscriptions.findFirst({
        where: (s, { eq }) => eq(s.userId, userId),
      });
      if (data) return { data: data as Subscription, error: null };
      else return { data: null, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: `Error` };
    }
  };          

  export const getFiles = async (folderId: string) => {
    const isValid = validate(folderId);
    if (!isValid) return { data: null, error: 'Error' };
    try {
      const results = (await db
        .select()
        .from(files)
        .orderBy(files.createdAt)
        .where(eq(files.folderId, folderId))) as File[] | [];
      return { data: results, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: 'Error' };
    }
  };