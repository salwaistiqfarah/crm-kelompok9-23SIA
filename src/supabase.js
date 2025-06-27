import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nkpxjiwmxqrvmnjlpoku.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rcHhqaXdteHFydm1uamxwb2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NTkwMzcsImV4cCI6MjA2NjIzNTAzN30.n2RhJIS0Kp8u4GJ3RfUrV9ol0Z8onczb57EmJDs3ZTg'

export const supabase = createClient(supabaseUrl, supabaseKey)