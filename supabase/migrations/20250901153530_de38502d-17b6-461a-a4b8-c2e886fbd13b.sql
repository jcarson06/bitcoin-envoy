-- Add status column to signups table for tracking submission states
ALTER TABLE public.signups 
ADD COLUMN status TEXT NOT NULL DEFAULT 'new';

-- Add a check constraint to ensure only valid status values
ALTER TABLE public.signups 
ADD CONSTRAINT signups_status_check 
CHECK (status IN ('new', 'contacted', 'completed', 'archived'));

-- Create an index on status for better query performance
CREATE INDEX idx_signups_status ON public.signups (status);