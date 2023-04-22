import { createClient } from "@supabase/supabase-js";

const URL = 'https://bhwvepmqwumrptlrvxny.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJod3ZlcG1xd3VtcnB0bHJ2eG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxNjMyMzYsImV4cCI6MTk5NzczOTIzNn0.YR9050R3LCzka9s2BqH1ddbp_fnzhS8QxlKQtSXStMI';

export const supabase =  createClient(URL, API_KEY);