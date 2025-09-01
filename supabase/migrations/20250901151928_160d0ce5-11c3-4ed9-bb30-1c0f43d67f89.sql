-- Enable RLS policies for the signups table to allow public form submissions
-- This allows anyone to insert their own signup data (public form)
-- but prevents reading other people's data

CREATE POLICY "Anyone can insert signups" 
ON public.signups 
FOR INSERT 
WITH CHECK (true);

-- Optional: Allow users to view their own signups if needed later
-- (commenting out for now since this is just a contact form)
-- CREATE POLICY "Users can view their own signups" 
-- ON public.signups 
-- FOR SELECT 
-- USING (email = current_setting('request.jwt.claims')::json->>'email');