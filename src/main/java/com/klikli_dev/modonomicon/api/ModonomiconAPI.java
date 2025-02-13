/*
 * SPDX-FileCopyrightText: 2022 klikli-dev
 *
 * SPDX-License-Identifier: MIT
 */

package com.klikli_dev.modonomicon.api;

import com.klikli_dev.modonomicon.api.datagen.BookLangHelper;
import com.klikli_dev.modonomicon.api.datagen.EntryLocationHelper;
import com.klikli_dev.modonomicon.api.multiblock.Multiblock;
import com.klikli_dev.modonomicon.api.stub.ModonomiconAPIStub;
import net.minecraft.resources.ResourceLocation;
import net.minecraftforge.common.util.Lazy;
import org.apache.logging.log4j.LogManager;

public interface ModonomiconAPI {

    String ID = "modonomicon";
    String Name = "Modonomicon";

    static ModonomiconAPI get() {
        return Helper.lazyInstance.get();
    }

    /**
     * False if a real API instance is provided
     */
    boolean isStub();

    BookLangHelper getLangHelper(String modid);

    EntryLocationHelper getEntryLocationHelper();

    Multiblock getMultiblock(ResourceLocation id);

    class Helper {
        private static final Lazy<ModonomiconAPI> lazyInstance = Lazy.concurrentOf(() -> {
            try {
                return (ModonomiconAPI) Class.forName("com.klikli_dev.modonomicon.apiimpl.ModonomiconAPIImpl").getDeclaredConstructor().newInstance();
            } catch (ReflectiveOperationException e) {
                LogManager.getLogger().warn("Could not find ModonomiconAPI, using stub.");
                return ModonomiconAPIStub.get();
            }
        });
    }

}
