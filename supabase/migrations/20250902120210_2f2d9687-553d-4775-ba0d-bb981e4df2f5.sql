-- Add RLS policy for admin access to signups table
-- For now using a simple approach - in production you'd want proper admin authentication

-- Add a policy to allow reading all signups (for admin interface)
CREATE POLICY "Admin can view all signups" 
ON public.signups 
FOR SELECT 
USING (true);

-- Add a policy to allow updating signup status (for admin interface)
CREATE POLICY "Admin can update signup status" 
ON public.signups 
FOR UPDATE 
USING (true)
WITH CHECK (true);

-- Add index for better performance on status filtering
CREATE INDEX IF NOT EXISTS idx_signups_status ON public.signups(status);
CREATE INDEX IF NOT EXISTS idx_signups_created_at ON public.signups(created_at DESC);