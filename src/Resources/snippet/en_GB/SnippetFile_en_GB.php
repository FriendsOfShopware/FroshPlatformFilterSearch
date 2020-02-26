<?php

namespace FroshPlatformFilterSearch\Resources\snippet\en_GB;

use Shopware\Core\System\Snippet\Files\SnippetFileInterface;

class SnippetFile_en_GB implements SnippetFileInterface {

    public function getName(): string
    {
        return 'storefront';
    }

    public function getPath(): string
    {
        return __DIR__ . '/storefront.en-GB.json';
    }

    public function getIso(): string
    {
        return 'en-GB';
    }

    public function getAuthor(): string
    {
        return 'FriendsOfShopware';
    }

    public function isBase(): bool
    {
        return false;
    }
}
