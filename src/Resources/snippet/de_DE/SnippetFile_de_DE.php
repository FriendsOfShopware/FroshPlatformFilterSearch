<?php

namespace FroshPlatformFilterSearch\Resources\snippet\de_DE;

use Shopware\Core\System\Snippet\Files\SnippetFileInterface;

class SnippetFile_de_DE implements SnippetFileInterface {

    public function getName(): string
    {
        return 'storefront';
    }

    public function getPath(): string
    {
        return __DIR__ . '/storefront.de-DE.json';
    }

    public function getIso(): string
    {
        return 'de-DE';
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
