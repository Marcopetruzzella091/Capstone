<?php

namespace App\Http\Controllers;

use Goutte\Client;
use Symfony\Component\HttpClient\HttpClient;

class WebScrapingController extends Controller
{
    public function scrape()
    {
        $client = new Client(HttpClient::create(['timeout' => 60]));

        // Imposta un User-Agent personalizzato per simulare un browser moderno
        $client->setServerParameter('HTTP_USER_AGENT', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36');

        // Aggiungi altri header per simulare un browser
        $headers = [
            'Accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding' => 'gzip, deflate, br',
            'Accept-Language' => 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
            'Cache-Control' => 'max-age=0',
            'Connection' => 'keep-alive',
            'Referer' => 'https://www.google.com/',
        ];

        // Esegui la richiesta GET con gli header aggiuntivi
        $crawler = $client->request('GET', 'https://macchine-caffe.it/', [], [], $headers);

        // Array per raccogliere i dati
        $data = [];

        // Estrarre i testi degli elementi span e salvarli nell'array
        $crawler->filter('h3')->each(function ($node) use (&$data) {
            $data['headings'][] = $node->text();
        });

        // Estrarre gli attributi href degli elementi a e salvarli nell'array
        // Decommenta il seguente blocco per attivarlo
        /*
        $crawler->filter('a')->each(function ($node) use (&$data) {
            $data['links'][] = $node->attr('href');
        });
        */

        // Ritorna l'array dei dati raccolti
        return $data;
    }
}
