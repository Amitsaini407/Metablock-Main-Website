import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import AllRouteFiles from "./AllRouteFiles"; // Import your routes component

const generateSitemap = async () => {
    const hostname = "https://metablocktechnologies.in"; // Your website URL
    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream("./public/sitemap.xml"); // Path where you want to save the sitemap

    // Define routes
    const routes = (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllRouteFiles />} />
            </Routes>
        </BrowserRouter>
    );

    // Pipe all URLs to the sitemap stream
    routes.props.children.props.children.forEach((route) => {
        sitemap.write({ url: route.props.path });
    });

    sitemap.end();

    // Convert sitemap stream to promise and save it to file
    await streamToPromise(sitemap).then((data) =>
        writeStream.write(data.toString())
    );

    console.log("Sitemap generated successfully");
};

generateSitemap();
