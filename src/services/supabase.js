import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hzesenifmaqiekalacyk.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6ZXNlbmlmbWFxaWVrYWxhY3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MTExNjMsImV4cCI6MjAxMDM4NzE2M30.7NosZNdoO7tW_iBIfxikxYXKR-7zjYag-aQxfmGtDuw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
