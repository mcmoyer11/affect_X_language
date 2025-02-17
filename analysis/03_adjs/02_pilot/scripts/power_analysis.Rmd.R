---
  title: "Verbs,Nouns,Adjs"
author: "morgan moyer"
date: "`r Sys.Date()`"
output: html_document
---
  
```{r setup, include=FALSE, warning=FALSE, echo=FALSE}
knitr::opts_chunk$set(echo = TRUE)
library(ggplot2)
library(lme4)
library(lmerTest)
library(multcomp) # not available for this version of R
library(stringr)
library(textstem)
library(tidyverse)
library(kableExtra)
theme_set(theme_bw())
library(ggrepel)
cbPalette <- c("#56B4E9", "#D55E00", "#009E73","#999999", "#E69F00")
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)
source("../../helpers.R")


# Install the pwr package
install.packages("pwr")
library(pwr)

# Power analysis for ANOVA with 9 groups (3x3), medium effect size
result <- pwr.anova.test(k = 9, f = 0.25, sig.level = 0.05, power = 0.8)
print(result)
```