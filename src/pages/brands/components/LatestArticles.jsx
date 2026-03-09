import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// lanluma
import lanluma4 from "assets/lanluma/4.png";
import lanluma5 from "assets/lanluma/5.png";
import lanluma6 from "assets/lanluma/6.png";

// ellanse
import ellanse4 from "assets/ellanse/4.png";
import ellanse5 from "assets/ellanse/5.png";
import ellanse6 from "assets/ellanse/6.png";

// maili
import maili4 from "assets/maili/4.png";
import maili5 from "assets/maili/5.png";
import maili6 from "assets/maili/6.png";

const imagesByPage = {
    lanluma: [lanluma4, lanluma5, lanluma6],
    ellanse: [ellanse4, ellanse5, ellanse6],
    maili: [maili4, maili5, maili6],
};

export default function LatestArticles(props) {
    const { t } = useTranslation();
    const page = props.page;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const imgs = imagesByPage[page] ?? imagesByPage.lanluma;

    const articles = [
        {
            id: 1,
            image: imgs[0],
            title: t(`brands.${page}.articles.items[0].title`),
            description: t(`brands.${page}.articles.items[0].description`),
        },
        {
            id: 2,
            image: imgs[1],
            title: t(`brands.${page}.articles.items[1].title`),
            description: t(`brands.${page}.articles.items[1].description`),
        },
        {
            id: 3,
            image: imgs[2],
            title: t(`brands.${page}.articles.items[2].title`),
            description: t(`brands.${page}.articles.items[2].description`),
        },
    ];

    // Mobile: scroll the WHOLE section (heading slide + article slides)
    const scrollerRef = React.useRef(null);
    const [active, setActive] = React.useState(0);

    // ✅ Active dot based on real slide positions (works with different widths)
    React.useEffect(() => {
        if (!isMobile) return;

        const el = scrollerRef.current;
        if (!el) return;

        const onScroll = () => {
            // Only article slides (skip heading slide)
            const articleSlides = Array.from(
                el.querySelectorAll("[data-article-slide='true']")
            );
            if (!articleSlides.length) return;

            const left = el.scrollLeft;

            let bestIdx = 0;
            let bestDist = Infinity;

            articleSlides.forEach((node, idx) => {
                const dist = Math.abs(node.offsetLeft - left);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestIdx = idx;
                }
            });

            setActive(bestIdx);
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => el.removeEventListener("scroll", onScroll);
    }, [isMobile]);

    const scrollToArticle = (idx) => {
        const el = scrollerRef.current;
        if (!el) return;

        const articleSlides = Array.from(
            el.querySelectorAll("[data-article-slide='true']")
        );
        const target = articleSlides[idx];
        if (!target) return;

        el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    };

    const HeadingBlock = () => (
        <Box sx={{ pt: { xs: 0, sm: 2 },  }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2,  }}>
                <Box
                    sx={{
                    
                        width: 65,
                        height: 2,
                        bgcolor: "#012169",
                        opacity: 0.6,
                        flexShrink: 0,
                        marginLeft:{xs: "1rem", sm:"unset"},

                    }}
                />
                <Typography
                    sx={{
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontSize: {xs:12,sm:10, md:12},
                        color: "#012169",
                        opacity: 0.85,
                        marginLeft:{xs: "1rem", sm:"unset"},

                    }}
                >
                    {t(`brands.${page}.articles.title`)}
                </Typography>
            </Box>

            <Typography
                variant="h3"
                sx={{
                    fontFamily: "Georgia, serif",
                    fontWeight: 500,
                    color: "#012169",
                    lineHeight: 1.05,
                    fontSize: { xs: "1.6rem",sm:"1rem", md: "1.6rem" },
                   
                    marginLeft:{xs: "1rem", sm:"unset"},
                }}
            >
                {t(`brands.${page}.articles.subtitle`)}
            </Typography>
        </Box>
    );

    const ArticleCard = ({ a }) => (
        <Box
            sx={{
                bgcolor: "#fff",
                height: {xs:"462px",sm:285,md:462},
                // 285,
                overflow: "hidden",
                boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
            }}
        >
            <Box
                component="img"
                src={a.image}
                alt={a.title}
                sx={{
                    width: "100%",
                    height: {xs:260,sm:150,md:260},
                    objectFit: "cover",
                    display: "block",
                }}
            />

            <Box sx={{ p: {xs:3,sm:1,md:3}, pt:{xs:3,sm:2,md:3} }}>
                <Typography
                    sx={{
                        fontSize: {xs:16,sm:9,md:16},
                        fontWeight: 500,
                        color: "#1F2A44",
                        mb: 1.25,
                    }}
                >
                    {a.title}
                </Typography>

                <Typography
                    sx={{
                       
                        fontSize: {xs: 12.5,sm:8,md: 12.5},
                        lineHeight: 1.6,
                        color: "#1F2A44",
                        opacity: 0.7,
                    }}
                >
                    {a.description}
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box component="section" sx={{ bgcolor:page == 'lanluma'? '#EEE8F5': "#E0FFF5", py: { xs: 6, sm: 10 } }}>
            {/* Desktop / Tablet: unchanged */}
            {!isMobile ? (
                <Box
                    sx={{
                        maxWidth: 1200,
                        mx: "auto",
                        px: { xs: 3, sm: 6 },
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                        gap: { xs: 4, sm: 2 },
                        alignItems: "start",
                    }}
                >
                    <HeadingBlock />

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                            gap: { xs: 1,sm:"12px", md: 2 },
                        }}
                    >
                        {articles.map((a) => (
                            <ArticleCard key={a.id} a={a} />
                        ))}
                    </Box>
                </Box>
            ) : (
                // Mobile: one heading slide + article slides (whole thing scrolls)
                <Box sx={{ maxWidth: 1200, mx: "auto", padding: 0 }}>
                    <Box
                        ref={scrollerRef}
                        sx={{
                            display: "flex",
                            overflowX: "auto",
                            scrollSnapType: "x mandatory",
                            WebkitOverflowScrolling: "touch",
                            pb: 3,
                            "&::-webkit-scrollbar": { display: "none" },
                            scrollbarWidth: "none",
                        }}
                    >
                        {/* Slide 0: Heading ONLY (one time) */}
                        <Box
                            data-slide="true"
                            sx={{
                               
                                flex: "0 0 50%",
                                scrollSnapAlign: "start",
                                pr: 2,
                            }}
                        >
                            <HeadingBlock />
                        </Box>

                        {/* Slides 1..N: Articles */}
                        {articles.map((a) => (
                            <Box
                                key={a.id}
                                data-slide="true"
                                data-article-slide="true"
                                sx={{
                                    flex: "0 0 80%",
                                    scrollSnapAlign: "start",
                                    pr: 2,
                                    minWidth: 0,
                                }}
                            >
                                <ArticleCard a={a} />
                            </Box>
                        ))}
                    </Box>

                    {/* Static dots (do not move while scrolling) */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                            mt: 1,
                        }}
                    >
                        {articles.map((_, idx) => {
                            const isActive = idx === active;
                            return (
                                <Box
                                    key={idx}
                                    onClick={() => scrollToArticle(idx)}
                                    role="button"
                                    aria-label={`Go to article ${idx + 1}`}
                                    sx={{
                                        cursor: "pointer",
                                        transition: "all 200ms ease",
                                        width: isActive ? 56 : 10,
                                        height: 10,
                                        borderRadius: 999,
                                        bgcolor: isActive ? "#7C6BE6" : "#D8D3F3",
                                    }}
                                />
                            );
                        })}
                    </Box>
                </Box>
            )}
        </Box>
    );
}