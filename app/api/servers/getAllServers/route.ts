import { supabase } from "@/components/client";
import { Request, Response } from "express";

export async function GET(req: Request, res: Response) {
  try {
    const { data: servers, error } = await supabase.from("Server").select();
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(servers);
    }
  } catch (error) {
    console.error("Error fetching servers:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
