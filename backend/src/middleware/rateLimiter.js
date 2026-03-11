import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    // ratelimiting should be done per user basis, so we can use user's IP address as the key for rate limiting or if we have authentication, we can use user's id as the key for rate limiting. For now, we will use IP address as the key for rate limiting.
    try {
        const { success } = await ratelimit.limit("my-limit-key")

        if (!success) {
            return res.status(429).json({ message: "Too many requests. Please try again later." });
        }
        
        next(); // Call the next middleware or route handler if the request is allowed  
    }
    catch (error) {
        console.log("Rate limit error", error);
        next(error); // Pass the error to the next middleware (error handling middleware)
     }

}

export default rateLimiter;