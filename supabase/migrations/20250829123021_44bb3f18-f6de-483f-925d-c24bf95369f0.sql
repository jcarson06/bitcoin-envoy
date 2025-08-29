-- Fix the RLS policy for consultation_requests to ensure anonymous users can submit
-- Drop the existing INSERT policy and recreate it properly
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON public.consultation_requests;

-- Create a proper policy that allows anyone (including anonymous users) to insert consultation requests
CREATE POLICY "Anyone can submit consultation requests" 
ON public.consultation_requests 
FOR INSERT 
WITH CHECK (true);