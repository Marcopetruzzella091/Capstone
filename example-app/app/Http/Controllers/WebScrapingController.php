<?php

namespace App\Http\Controllers;

use Goutte\Client;
use Symfony\Component\HttpClient\HttpClient;

class WebScrapingController extends Controller
{
    public function scrape()
    {
        $client = new Client(HttpClient::create(['timeout' => 60]));
        $crawler = $client->request('GET', 'https://macchine-caffe.it/migliore-macchina-caffe-cialde-recensioni-e-guida-allacquisto/');

        // Array per raccogliere i dati
        $data = [];

        // Estrarre i testi degli elementi h2 e salvarli nell'array
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

