using System;
namespace Weather
{
    // Tracks and increment the number of API hits.
    public class ApiHitTracker
	{
        private int count;

        public int Count => count;

        public ApiHitTracker()
        {
            count = 0;
        }

        public int GetCount()
        {
            return count;
        }

        public void IncrementCount()
        {
            Interlocked.Increment(ref count);
        }
    }
}
