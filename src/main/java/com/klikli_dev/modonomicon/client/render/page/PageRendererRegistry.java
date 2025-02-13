/*
 * SPDX-FileCopyrightText: 2022 klikli-dev
 *
 * SPDX-License-Identifier: MIT
 */

package com.klikli_dev.modonomicon.client.render.page;

import com.klikli_dev.modonomicon.api.ModonomiconConstants.Data.Page;
import com.klikli_dev.modonomicon.book.page.*;
import net.minecraft.resources.ResourceLocation;

import java.util.HashMap;
import java.util.Map;

public class PageRendererRegistry {
    private static final Map<ResourceLocation, PageRendererFactory> pageRenderers = new HashMap<>();

    /**
     * Call from client setup
     */
    public static void registerPageRenderers() {
        registerDefaultPageRenderers();
    }

    private static void registerDefaultPageRenderers() {
        registerPageRenderer(Page.TEXT, p -> new BookTextPageRenderer((BookTextPage)p));
        registerPageRenderer(Page.MULTIBLOCK, p -> new BookMultiblockPageRenderer((BookMultiblockPage)p));
        registerPageRenderer(Page.CRAFTING_RECIPE, p -> new BookCraftingRecipePageRenderer((BookCraftingRecipePage) p));
        registerPageRenderer(Page.SMELTING_RECIPE, p -> new BookProcessingRecipePageRenderer<>((BookSmeltingRecipePage) p) {});
        registerPageRenderer(Page.SMOKING_RECIPE, p -> new BookProcessingRecipePageRenderer<>((BookSmokingRecipePage) p) {});
        registerPageRenderer(Page.CAMPFIRE_COOKING_RECIPE, p -> new BookProcessingRecipePageRenderer<>((BookCampfireCookingRecipePage) p) {});
        registerPageRenderer(Page.BLASTING_RECIPE, p -> new BookProcessingRecipePageRenderer<>((BookBlastingRecipePage) p) {});
        registerPageRenderer(Page.STONECUTTING_RECIPE, p -> new BookProcessingRecipePageRenderer<>((BookStonecuttingRecipePage) p) {});
        registerPageRenderer(Page.SMITHING_RECIPE, p -> new BookSmithingRecipePageRenderer((BookSmithingRecipePage) p) {});
        registerPageRenderer(Page.LEGACY_SMITHING_RECIPE, p -> new BookLegacySmithingRecipePageRenderer((BookLegacySmithingRecipePage) p) {});
        registerPageRenderer(Page.SPOTLIGHT, p -> new BookSpotlightPageRenderer((BookSpotlightPage) p) {});
        registerPageRenderer(Page.EMPTY, p -> new BookEmptyPageRenderer((BookEmptyPage) p) {});
        registerPageRenderer(Page.ENTITY, p -> new BookEntityPageRenderer((BookEntityPage) p) {});
        registerPageRenderer(Page.IMAGE, p -> new BookImagePageRenderer((BookImagePage) p) {});
    }

    /**
     * Call from client setup
     */
    public static void registerPageRenderer(ResourceLocation id, PageRendererFactory factory) {
        pageRenderers.put(id, factory);
    }

    public static PageRendererFactory getPageRenderer(ResourceLocation id) {
        var renderer = pageRenderers.get(id);
        if (renderer == null) {
            throw new IllegalArgumentException("No page renderer registered for page type " + id);
        }
        return renderer;
    }

}
