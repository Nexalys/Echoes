import MarkdownPreview from '@uiw/react-markdown-preview';

import { Icon } from "../components/ui/Icon";
import { HR } from "../components/ui/Line";
import { BlogCardSmall, BlogNavigator } from "../components/Blog";
import { SampleAvatar } from "../components/ui/Profile";
import { Tooltip, TooltipWrapper } from "../components/ui/Tooltip";
import { useTheme } from "next-themes";
import { Link } from 'react-router-dom';
import {extractHeadersFromMarkdown, observeHeader} from "../utils/utils.js";
import {useEffect, useState} from "react";


const markdownText = `# The History of Cutlery: A Culinary Journey Through Time

## Introduction

Cutlery, an essential part of human civilization, encompasses the tools we use for preparing, serving, and consuming food. From the rudimentary tools of ancient cultures to the sophisticated designs of modern utensils, cutlery has evolved significantly over the centuries. This essay explores the rich history of cutlery, highlighting its development, cultural significance, and technological advancements.

---

## 1. The Origins of Cutlery


The earliest forms of cutlery can be traced back to prehistoric times when humans relied on natural tools for eating and food preparation. Evidence suggests that early humans used sharpened stones, animal bones, and wood to slice, spear, and consume food. These rudimentary tools were essential for survival, allowing our ancestors to hunt, gather, and prepare meals.

#### 1.1.1 Evolution of Tools

The evolution of tools marked the beginning of human innovation. Early humans created hand axes and scrapers from flint, which were vital for cutting meat and processing plant materials. As humans evolved, so did their tools, leading to more refined cutting implements made from obsidian and other sharp stones.

#### 1.1.2 Social Aspects of Eating

During these prehistoric times, communal eating was common, and the tools used reflected the social nature of food consumption. Early humans likely gathered around fires, sharing food and tools, fostering a sense of community. The act of eating was not just about nourishment; it was a social activity that strengthened bonds among individuals.

### 1.2 Ancient Civilizations

As societies advanced, so did their tools. Ancient civilizations, such as the Egyptians, Greeks, and Romans, developed more sophisticated implements for eating and food preparation.

#### 1.2.1 Egyptian Cutlery

In ancient Egypt, cutlery consisted of bronze and wooden utensils. The Egyptians are credited with inventing the knife, which was essential for butchering meat. They also used spoons, often made from wood or ivory, for serving and consuming food. Hieroglyphs found in tombs depict scenes of dining, showcasing the importance of utensils in their culture.

##### 1.2.1.1 Dining Rituals

Dining in ancient Egypt was often a ritualistic affair. The wealthy enjoyed lavish banquets featuring an array of dishes, from roasted meats to honeyed pastries. The presence of intricate cutlery highlighted the status of the host and the significance of the meal.

##### 1.2.1.2 Symbolism of Cutlery

Cutlery in ancient Egypt also carried symbolic meanings. Knives, for instance, were often associated with the god Anubis, the deity of funerary rites. The careful placement of cutlery in tombs indicated the importance of food in the afterlife, suggesting that the deceased would continue to dine in the realm beyond.

#### 1.2.2 Greek Innovations

The Greeks further advanced cutlery with the introduction of the fork and the improvement of knives and spoons. Greek philosophers and playwrights often referenced cutlery in their works, emphasizing its role in social gatherings and banquets. The Greeks were also known for their elaborate feasts, which featured a variety of dishes served with an array of utensils.

##### 1.2.2.1 The Symposium

The Greek symposium was a significant social event that emphasized the importance of food and drink. Participants reclined on couches, using knives and spoons to enjoy dishes ranging from roasted meats to fruits. The fork, although not widely used for eating, began to appear in serving dishes.

##### 1.2.2.2 Influence on Dining Etiquette

The Greeks contributed significantly to dining etiquette, establishing practices that influenced future generations. The careful arrangement of cutlery and the use of specific utensils for different dishes became foundational aspects of dining culture.

#### 1.2.3 Roman Influence

The Romans adopted and refined Greek cutlery, adding their unique touch. They popularized the use of forks, which were initially used for serving food rather than eating. Roman cutlery was often made from bronze, silver, or even gold, reflecting the wealth and status of the owner. The Roman Empire's expansion facilitated the spread of cutlery innovations throughout Europe.

##### 1.2.3.1 Cutlery in Roman Dining

Roman dining practices were elaborate, often involving multiple courses served with a variety of utensils. The presence of silver cutlery in wealthy households demonstrated opulence, while the widespread use of bronze and wooden utensils illustrated the accessibility of cutlery across different social strata.

##### 1.2.3.2 Cultural Exchange

The Roman Empire was a melting pot of cultures, and the exchange of culinary practices led to the evolution of cutlery. The incorporation of Eastern utensils and dining customs enriched Roman dining experiences, showcasing the adaptability of cutlery to various culinary traditions.

---

## 2. The Medieval Era: Cutlery in Europe

### 2.1 The Rise of Eating Utensils

During the medieval period, the use of cutlery became more widespread in Europe. The introduction of the fork as a dining tool marked a significant change in eating habits. Initially met with skepticism, the fork gained popularity among the upper classes and eventually became a staple in European dining.

#### 2.1.1 The Shift in Dining Practices

As feudalism shaped society, the dining customs of the nobility began to diverge from those of the common folk. The upper classes adopted more elaborate dining rituals, necessitating the use of various utensils. Knives became essential for personal use at the table, while forks were introduced as serving tools.

#### 2.1.2 The Role of Spoons

Spoons also evolved during this period. While earlier spoons were made from wood or bone, metal spoons became increasingly popular among the wealthy. Silver and gold spoons were often intricately designed, showcasing the artistry and skill of blacksmiths and silversmiths.

---

### 2.2 The Importance of Knives

In medieval Europe, knives were essential utensils, often used for both cutting food and as weapons. It was common for individuals to carry their own knives, which they would use at the dining table. These knives featured pointed blades and wooden handles, reflecting the practicality and craftsmanship of the time.

#### 2.2.1 Craftsmanship of Knives

The craftsmanship of knives became highly regarded during the medieval era. Blacksmiths honed their skills, creating blades with varying shapes and sizes suited for specific purposes. The handles were often carved from wood or fashioned from bone, displaying intricate designs that reflected the owner’s status.

#### 2.2.2 The Role of Knives in Society

Knives were not only tools but also symbols of identity. The ownership of a finely crafted knife could denote one’s social standing, and in some cultures, a knife was passed down as a family heirloom. The act of sharing food often involved presenting one’s knife as a gesture of goodwill and hospitality.

---

## 3. The Renaissance: A Period of Innovation

### 3.1 The Fork Becomes Fashionable

The Renaissance brought about significant changes in art, culture, and dining practices. The fork, once viewed as an unnecessary luxury, became fashionable among the European elite. By the 16th century, forks with two or three tines were commonly used for eating, particularly in Italy and France.

#### 3.1.1 Culinary Influences

Italian cuisine played a significant role in the acceptance of the fork. The advent of pasta and intricate sauces necessitated the use of specialized utensils, leading to the widespread adoption of forks in dining practices. The influence of Italian dining customs spread across Europe, promoting the fork as a standard utensil.

#### 3.1.2 Social Status and Cutlery

During the Renaissance, the possession of a complete set of cutlery became synonymous with wealth and refinement. Wealthy families commissioned elaborate cutlery sets, often featuring ornate designs and precious materials. The aesthetics of cutlery became as important as its functionality, reflecting the cultural values of the time.

### 3.2 Decorative Cutlery

As cutlery gained popularity, it also became a status symbol. Wealthy families commissioned elaborate sets of cutlery made from precious metals, often adorned with intricate designs. These sets included knives, forks, spoons, and serving utensils, reflecting the owner's wealth and social standing.

#### 3.2.1 Intricate Designs

Cutlery during the Renaissance was often handcrafted, featuring elaborate engravings and embellishments. Silverware, in particular, became a favored choice for the aristocracy, showcasing the craftsmanship of skilled artisans. The designs reflected the artistic styles of the time, incorporating motifs inspired by nature and mythology.

#### 3.2.2 Symbolism of Cutlery

Cutlery served not only functional purposes but also symbolic meanings. Certain designs were associated with specific families or regions, creating a sense of identity and heritage. The presentation of cutlery during meals became a ritual in itself, with elaborate settings designed to impress guests.

### 3.3 The Influence of Italian Cuisine

Italian cuisine played a significant role in the evolution of cutlery. The introduction of pasta, risottos, and other dishes necessitated the use of specific utensils. For example, the long tines of the fork were ideal for twirling pasta, while specialized serving spoons emerged to cater to new culinary creations.

#### 3.3.1 Culinary Fusion

As Italian cuisine gained popularity across Europe, it influenced dining practices and cutlery design. The fusion of culinary traditions led to the creation of new dishes, and with them, new utensils. The evolution of cutlery mirrored the changing tastes and preferences of society.

#### 3.3.2 Standardization of Utensils

The increased popularity of Italian cuisine also led to the standardization of cut
`

export default function Blog() {
    const headerInfo = extractHeadersFromMarkdown(markdownText);
    const [ currentLink, setCurrentLink ] = useState(headerInfo[0].link);

    useEffect(() => {
        const headerElements = headerInfo.map(({ link }) => {
            if (/^[0-9]+/.test(link.slice(1))) {
                link = `#\\${link.charCodeAt(1).toString(16)}\\ ${link.slice(2)}`;
                console.log(link);
            }

            // Select the header element using the modified link
            return document.querySelector(link);
        }).filter(Boolean); // Filter out any null values

        console.log(headerElements);

        // Set up observers for each header element
        const observers = headerElements.map(headerElement => {
            return observeHeader(headerElement, (id) => {
                setCurrentLink(id);
            });
        });

        // Cleanup function to disconnect observers
        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [headerInfo]);

    return (
        <section>
            <section className="shadow-main rounded-3xl p-8 flex flex-row justify-start gap-[50px] relative">
                <div className="blog-content w-[75%] flex place-content-center shadow-main py-[100px] rounded-2xl">
                    <div className="w-[80%] flex flex-col gap-10 h-fit">
                        <div className="flex justify-between items-start ">
                            <h1 className="text-5xl font-bold w-[70%]">
                                The magic of negative space: where less is truly more.
                            </h1>
                            <div className="flex flex-row gap-[20px]">
                                <TooltipWrapper className='relative'>
                                    <Tooltip>
                                        View
                                    </Tooltip>
                                    <Icon name="Eye"
                                          className="text-accent hover:text-primary text-3xl cursor-pointer"
                                    />
                                </TooltipWrapper>
                                <TooltipWrapper className='relative'>
                                    <Tooltip>
                                        Bookmark
                                    </Tooltip>
                                    <Icon name="Bookmark"
                                          className="text-accent hover:text-primary text-3xl cursor-pointer"
                                    />
                                </TooltipWrapper>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <HR/>
                            <div className="flex flex-row gap-[10px] justify-start items-center">
                                <SampleAvatar className='h-12 w-12 rounded-full '/>
                                <div className="flex flex-col place-content-center">
                                    <h1 className="text-3xl font-bold">Username</h1>
                                    <div className="flex place-content-center gap-2">
                                        <p>Published 12th June 2024</p> •
                                        <Link to="" className="text-accent">Follow</Link>
                                    </div>
                                </div>
                            </div>
                            <HR/>
                        </div>
                        <div className='w-[80%] markdown-preview-container'>
                            <MarkdownPreview
                                source={markdownText}
                                className='rounded-xl h-full bg-background text-text flex flex-col gap-2'
                                wrapperElement={{
                                    "data-color-mode": useTheme().resolvedTheme
                                }}
                            />
                        </div>
                    </div>
                </div>
                <BlogNavigator
                    markdownValue={markdownText}
                    className='w-[25%] rounded-2xl shadow-main p-10'
                    headerInfo={headerInfo}
                    selectedLink={currentLink}
                />
            </section>

            <section className="mt-[50px] p-10 shadow-main rounded-2xl grid-cols-2">
                <h1 className="text-4xl py-10">More from <span className="text-gradient text-5xl font-bold">Username</span></h1>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[15px] h-[500px] overflow-scroll">
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                </div>
            </section>

            <section className="mt-[50px] p-10 shadow-main rounded-2xl grid-cols-2">
                <h1 className="text-4xl py-10">More on <span className="text-gradient text-5xl font-bold">This Topic</span></h1>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[15px]  h-[500px] overflow-scroll">
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                    <BlogCardSmall className=""/>
                </div>
            </section>
        </section>

    )
}